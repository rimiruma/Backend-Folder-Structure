import AddProductPage from "./add-product/page";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm p-8 min-h-[50vh] flex items-center justify-center border border-gray-100">
        <div className="text-center">
          <AddProductPage></AddProductPage>
        </div>
      </div>
    </div>
  );
}
