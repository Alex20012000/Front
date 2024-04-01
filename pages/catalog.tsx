import { URL } from "@/const";
import Layout from "@/components/Layout/layout";
import BookCatalog from "../components/BookCatalog/bookCatalog";
import CategoryCatalog from "../components/CategoryCatalog/categoryCatalog";
import { Loader } from "@/components/Loader/loader";

import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/pages/_app";
import { useRouter } from "next/navigation";
import { setPage, setCatalog, showLoading } from "@/pages/store/slices";
import { useState, useEffect, useRef } from "react";
import { addNewCategories, addtoCatalogNewItems } from "@/utils";

export default function Catalog() {
  const { push } = useRouter();
  const dispatch = useAppDispatch();
  const page = useRef(0);
  const token = useSelector((state: RootState) => state.authSlice.token);
  const catalog = useSelector((state: RootState) => state.workSlice.catalog);
  const loading = useSelector((state: RootState) => state.workSlice.loading);
  const [categories, setCategories] = useState(
    [] as { marked: boolean; name: string }[]
  );
  const [filteredCatalog, setFilteredCatalog] = useState<Item[]>([]);

  const filterBooks = (
    categories: { marked: boolean; name: string }[],
    catalog: Item[]
  ) => {
    const markedCategory = categories.filter((elem) => elem.marked);
    if (markedCategory.length === 0) {
      return catalog;
    } else {
      const cat = catalog.filter((item) => {
        for (let index = 0; index < item.categories.length; index++) {
          const itemcat = item.categories[index];
          return (
            markedCategory.find(
              (category) => itemcat.name === category.name
            ) !== undefined
          );
        }
      });
      return cat;
    }
  };

  const loadMore = async () => {
    dispatch(showLoading(true));
    let _url = String(URL);
    _url = _url.concat(_url[_url.length - 1] === "/" ? "" : "/");
    let filteredCategories = categories.filter((elem) => elem.marked);
    let categoriesStringArray: string[] = [];
    if (filteredCategories.length > 0) {
      categoriesStringArray = filteredCategories.map((elem) => elem.name);
    }

    const res = await fetch(
      `${_url}api/v1/books/books?limit=10&perPage=true&page=${
        page.current + 1
      }&categories=${categoriesStringArray}`,
      {
        method: "get",
        headers: new Headers({
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        }),
      }
    );

    if (res.status === 401) push("/login");
    if (res.status === 404) push("/404");
    if (res.status !== 200) {
      // Handle error
    } else {
      const receivedData = await res.json();
      if (receivedData.success) {
        let commonCategories = addNewCategories(
          categories,
          receivedData.result
        );
        let commonCatalog = addtoCatalogNewItems(catalog, receivedData.result);
        page.current = page.current + 1;
        dispatch(setCatalog(commonCatalog));
        setCategories(commonCategories);
        setFilteredCatalog(filterBooks(categories, commonCatalog));
        dispatch(showLoading(false));
      } else {
        push("/404");
      }
    }
  };

  useEffect(() => {
    dispatch(setPage(0));
    dispatch(setCatalog([] as Item[]));
    loadMore();
  }, []);

  const selectCategory = (category: { marked: boolean; name: string }) => {
    setCategories(
      categories.map((elem) => {
        if (elem.name === category.name) {
          elem.marked = !elem.marked;
        }
        return elem;
      })
    );
    setFilteredCatalog(filterBooks(categories, catalog));
  };

  const addBook = () => {
    push("/book/0");
  };

  const itemsReactNodes = filteredCatalog.map((item) => (
    <BookCatalog key={item.id} item={item} />
  ));
  const categoriesReactNodes = categories.map((category) => (
    <CategoryCatalog
      key={category.name}
      category={category}
      selectCategory={selectCategory}
    />
  ));

  return (
    <Layout>
      <div className="catalog-container">
        <div className="catalog-left">
          <div className="h1">Categories</div>
          <nav className="catalog-left-nav">
            <ul className="catalog-left-ul">{categoriesReactNodes}</ul>
          </nav>
        </div>
        <div className="catalog-right">
          {loading && <Loader />}
          {!loading && itemsReactNodes}
          <div className="catalog-book-button-container">
            <button className="biground-gray" onClick={loadMore}>
              {" "}
              More
            </button>
            <button className="biground-red" onClick={addBook}>
              {" "}
              Add book
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
