import Layout from "@/components/Layout/layout";
import BookItem from "@/components/BookItem/bookItem";

// Request data context
type Context = {
  params: { id: number };
};

export async function getServerSideProps(context: Context) {
  try {
    const id: number = Number(context.params.id);
    // Fetch book data using the id
    // const bookData = await fetchBookData(id);

    // Return props with book data
    return { props: { id } };
  } catch (error) {
    // Handle errors gracefully
    console.error("Error fetching book data:", error);
    return { props: { id: null } }; // Or handle error status accordingly
  }
}

interface BookProps {
  bookId: number;
}

export default function Book({ bookId }: BookProps) {
  return (
    <Layout>
      <BookItem id={bookId} />
    </Layout>
  );
}
