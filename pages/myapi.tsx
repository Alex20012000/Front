import Layout from "@/components/Layout/layout";
import { URL } from "@/const";
import { useState } from "react";
import Image from "next/image";

import register1 from "../public/myapi/register1.png";
import register2 from "@/public/myapi/register2.jpg";
import login1 from "@/public/myapi/login1.jpg";
import login2 from "@/public/myapi/login2.jpg";

const tabs = [
  { name: "register", content: "Register" },
  { name: "login", content: "Login" },
  { name: "get books", content: "Get Books" },
  { name: "post books", content: "Post Books" },
  { name: "get book", content: "Get Book" },
  { name: "put book", content: "Put Book" },
  { name: "delete book", content: "Delete Book" },
];

export default function Home() {
  const [query, setQuery] = useState("register");

  const handleTabClick = (tabName: string) => {
    setQuery(tabName);
  };

  return (
    <Layout>
      <div className="presentation ">
        <div className="tab">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`tablinks ${query === tab.name ? "active" : ""}`}
              onClick={() => handleTabClick(tab.name)}
            >
              {tab.content}
            </button>
          ))}
        </div>

        {tabs.map(
          (tab) =>
            query === tab.name && (
              <div key={tab.name} className="tabcontent">
                <h2> URL = {URL}api/v1</h2>
                <p>
                  <span className="bold">type {tab.name.toUpperCase()}: </span>
                  <pre />
                  <span className="bold">query: </span> {URL}/
                  {tab.name === "get book"
                    ? `books/book/1699741353125`
                    : tab.name}
                  <pre />
                  <span className="bold">Authorization: </span> Bearer
                  <pre />
                  <span className="bold">body: </span> <pre />
                  {tab.name === "register" && (
                    <>
                      <Image
                        src={register1}
                        alt="register1"
                        width={300}
                        height={120}
                      />
                      <pre />
                    </>
                  )}
                  {tab.name === "login" && (
                    <>
                      <Image
                        src={login1}
                        alt="login1"
                        width={250}
                        height={100}
                      />
                      <pre />
                    </>
                  )}
                  <span className="bold">answer success: </span>
                  <pre />
                  {tab.name === "register" && (
                    <Image
                      src={register2}
                      alt="register2"
                      width={1000}
                      height={80}
                    />
                  )}
                  {tab.name === "login" && (
                    <Image
                      src={login2}
                      alt="login2"
                      width={1000}
                      height={100}
                    />
                  )}
                  {(tab.name === "get books" ||
                    tab.name === "post books" ||
                    tab.name === "put book") && (
                    <>
                      <Image
                        src={`/myapi/${tab.name
                          .replace(/\s/g, "")
                          .toLowerCase()}1.jpg`}
                        alt={`${tab.name}1`}
                        width={1000}
                        height={230}
                      />
                      <pre />
                      <Image
                        src={`/myapi/${tab.name
                          .replace(/\s/g, "")
                          .toLowerCase()}2.jpg`}
                        alt={`${tab.name}2`}
                        width={1000}
                        height={500}
                      />
                    </>
                  )}
                  {tab.name === "get book" && (
                    <Image
                      src={`/myapi/getbook.jpg`}
                      alt="getbook"
                      width={1000}
                      height={500}
                    />
                  )}
                  {tab.name === "delete book" && (
                    <>
                      <Image
                        src={`/myapi/deletebook1.jpg`}
                        alt="deletebook1"
                        width={200}
                        height={80}
                      />
                      <pre />
                    </>
                  )}
                </p>
              </div>
            )
        )}
      </div>
    </Layout>
  );
}
