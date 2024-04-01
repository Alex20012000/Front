// Convert array of records to an array of their names
export function getNameArray(data: { name: string }[]): string[] {
    return data.map(record => record.name);
}

// Convert array of category objects to an array of category names
export function getStringCategories(data: Category[]): string[] {
    return Array.from(new Set(data.map(category => category.name)));
}

// Convert array of author objects to an array of author names
export function getStringAuthors(data: Author[]): string[] {
    return Array.from(new Set(data.map(author => author.name)));
}

// Add new categories to the existing category array
export const addNewCategories = (categories: { marked: boolean, name: string }[], newItems: Item[]): { marked: boolean, name: string }[] => {
    const newCategories = newItems.reduce((acc: { marked: boolean, name: string }[], item) => {
        item.categories.forEach(category => {
            if (!acc.find(cat => cat.name === category.name)) {
                acc.push({ marked: false, name: category.name });
            }
        });
        return acc;
    }, [...categories]);
    return newCategories;
}

// Add new items to the catalog
export function addToCatalogNewItems(catalog: Item[], receivedItems: Item[]): Item[] {
    const newCatalog = Array.from(new Set([...catalog, ...receivedItems]));
    return newCatalog;
}

// Remove item from the catalog by ID
export function removeFromCatalogItems(catalog: Item[], id: number): Item[] {
    return catalog.filter(item => item.id !== id);
}

// Generate a unique ID based on current timestamp
export function getUniqueID(): number {
    return Date.now();
}
