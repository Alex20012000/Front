export interface CategoryCatalogProps {
    category: {marked: boolean;name:string},
    selectCategory: (category:{marked: boolean;name:string}) => void
}
// import styles from './styles/register.css";
export default function CategoryCatalog({
    category,
    selectCategory
}: CategoryCatalogProps) {
   

    return (
    <>
      {(!category.marked) && <li className="catalog-left-nav-item" onClick={(e) => selectCategory(category)}> {category.name}</li>}
      {(category.marked) && <li className="catalog-left-nav-item active" onClick={(e) => selectCategory(category)}> {category.name}</li>}
    </>
    );
}
