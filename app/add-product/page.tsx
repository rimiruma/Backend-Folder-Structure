"use client";

import { useState } from "react";
import { 
  Package, 
  DollarSign, 
  Image as ImageIcon, 
  Tags, 
  Truck, 
  Settings, 
  FileText, 
  Save, 
  Eye, 
  CheckCircle,
  AlertCircle
} from "lucide-react";

export default function AddProductPage() {
  // 1. Manage all form inputs in a single state object
  const [formData, setFormData] = useState({
    name: "",
    shortDescription: "",
    fullDescription: "",
    brand: "",
    sku: "",
    category: "",
    subcategory: "",
    
    price: "",
    discountPrice: "",
    stock: "",
    moq: "",

    thumbnailUrl: "",
    galleryUrls: "",
    videoUrl: "",

    colors: "",
    sizes: "",

    weight: "",
    length: "",
    width: "",
    height: "",

    featured: false,
    flashSale: false,
    freeShipping: false,
    status: "draft",

    metaTitle: "",
    metaDescription: "",
    tags: "",
  });

  // 2. Manage error messages
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  
  // 3. Manage submitting state
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 4. Handle input changes easily
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // 5. Handle form submission and simple validation
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    setIsSubmitting(true);
    
    // Clear previous errors
    const newErrors: { [key: string]: string } = {};

    // Basic Validation Rules (Beginner friendly!)
    if (!formData.name) newErrors.name = "Product name is required";
    if (!formData.fullDescription) newErrors.fullDescription = "Full description is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.price || Number(formData.price) <= 0) newErrors.price = "Price must be greater than 0";
    if (!formData.stock || Number(formData.stock) < 0) newErrors.stock = "Stock must be at least 0";
    if (!formData.thumbnailUrl) newErrors.thumbnailUrl = "Thumbnail URL is required";

    // If there are errors, stop here
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    // If no errors, success!
    setErrors({});
    console.log("Form Submitted Successfully: ", formData);
    alert("Product saved successfully! Check console for data.");
    setIsSubmitting(false);
  };

  // Helper component for showing error messages nicely
  const ErrorMessage = ({ message }: { message?: string }) => {
    if (!message) return null;
    return (
      <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1 font-medium">
        <AlertCircle size={12} /> {message}
      </p>
    );
  };

  // Helper component for section headers
  const SectionHeader = ({ title, icon: Icon, description }: { title: string, icon: any, description?: string }) => (
    <div className="mb-6 pb-4 border-b border-gray-100">
      <div className="flex items-center gap-2 text-gray-800">
        <div className="bg-orange-50 text-[#F85606] p-2 rounded-lg">
          <Icon size={20} />
        </div>
        <h2 className="text-xl font-bold tracking-tight">{title}</h2>
      </div>
      {description && <p className="text-sm text-gray-500 mt-2 ml-11">{description}</p>}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Add New Product</h1>
          <div className="text-sm text-gray-500 hidden sm:block">Home / Add Product</div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content Column */}
          <div className="flex-1 space-y-8">
            
            {/* 1. Basic Information */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 transition-shadow hover:shadow-md">
              <SectionHeader title="Basic Information" icon={Package} description="Enter the core details of your product." />
              
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Product Name <span className="text-red-500">*</span></label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Apple iPhone 15 Pro Max"
                    className={`w-full px-4 py-2.5 rounded-lg border ${errors.name ? 'border-red-300 focus:ring-red-500' : 'border-gray-200 focus:ring-[#F85606] focus:border-[#F85606]'} bg-gray-50 focus:bg-white transition-all outline-none`}
                  />
                  <ErrorMessage message={errors.name} />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Short Description</label>
                  <input
                    name="shortDescription"
                    value={formData.shortDescription}
                    onChange={handleChange}
                    placeholder="Brief highlight of the product"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-[#F85606] focus:border-[#F85606] bg-gray-50 focus:bg-white transition-all outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Description <span className="text-red-500">*</span></label>
                  <textarea
                    name="fullDescription"
                    value={formData.fullDescription}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Detailed description, specifications, and features..."
                    className={`w-full px-4 py-3 rounded-lg border ${errors.fullDescription ? 'border-red-300 focus:ring-red-500' : 'border-gray-200 focus:ring-[#F85606] focus:border-[#F85606]'} bg-gray-50 focus:bg-white transition-all outline-none resize-y`}
                  />
                  <ErrorMessage message={errors.fullDescription} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Brand</label>
                    <input
                      name="brand"
                      value={formData.brand}
                      onChange={handleChange}
                      placeholder="e.g. Apple"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-[#F85606] focus:border-[#F85606] bg-gray-50 focus:bg-white transition-all outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">SKU</label>
                    <input
                      name="sku"
                      value={formData.sku}
                      onChange={handleChange}
                      placeholder="e.g. APP-IPH-15"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-[#F85606] focus:border-[#F85606] bg-gray-50 focus:bg-white transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Category <span className="text-red-500">*</span></label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 rounded-lg border ${errors.category ? 'border-red-300 focus:ring-red-500' : 'border-gray-200 focus:ring-[#F85606] focus:border-[#F85606]'} bg-gray-50 focus:bg-white transition-all outline-none appearance-none`}
                    >
                      <option value="">Select a category</option>
                      <option value="electronics">Electronics</option>
                      <option value="fashion">Fashion</option>
                      <option value="home">Home & Lifestyle</option>
                      <option value="beauty">Beauty & Health</option>
                    </select>
                    <ErrorMessage message={errors.category} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Subcategory</label>
                    <select
                      name="subcategory"
                      value={formData.subcategory}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-[#F85606] focus:border-[#F85606] bg-gray-50 focus:bg-white transition-all outline-none appearance-none"
                    >
                      <option value="">Select a subcategory</option>
                      <option value="smartphones">Smartphones</option>
                      <option value="laptops">Laptops</option>
                      <option value="accessories">Accessories</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Pricing & Inventory */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 transition-shadow hover:shadow-md">
              <SectionHeader title="Pricing & Inventory" icon={DollarSign} />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Regular Price (৳) <span className="text-red-500">*</span></label>
                  <input
                    type="number"
                    step="0.01"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="0.00"
                    className={`w-full px-4 py-2.5 rounded-lg border ${errors.price ? 'border-red-300 focus:ring-red-500' : 'border-gray-200 focus:ring-[#F85606] focus:border-[#F85606]'} bg-gray-50 focus:bg-white transition-all outline-none`}
                  />
                  <ErrorMessage message={errors.price} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Discount Price (৳)</label>
                  <input
                    type="number"
                    step="0.01"
                    name="discountPrice"
                    value={formData.discountPrice}
                    onChange={handleChange}
                    placeholder="0.00"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-[#F85606] focus:border-[#F85606] bg-gray-50 focus:bg-white transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Stock Quantity <span className="text-red-500">*</span></label>
                  <input
                    type="number"
                    name="stock"
                    value={formData.stock}
                    onChange={handleChange}
                    placeholder="0"
                    className={`w-full px-4 py-2.5 rounded-lg border ${errors.stock ? 'border-red-300 focus:ring-red-500' : 'border-gray-200 focus:ring-[#F85606] focus:border-[#F85606]'} bg-gray-50 focus:bg-white transition-all outline-none`}
                  />
                  <ErrorMessage message={errors.stock} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Min. Order Quantity</label>
                  <input
                    type="number"
                    name="moq"
                    value={formData.moq}
                    onChange={handleChange}
                    placeholder="1"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-[#F85606] focus:border-[#F85606] bg-gray-50 focus:bg-white transition-all outline-none"
                  />
                </div>
              </div>
            </div>

            {/* 3. Product Media */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 transition-shadow hover:shadow-md">
              <SectionHeader title="Product Media" icon={ImageIcon} description="Add high-quality URLs for product display." />
              
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Main Thumbnail URL <span className="text-red-500">*</span></label>
                  <div className="flex gap-3">
                    <input
                      name="thumbnailUrl"
                      value={formData.thumbnailUrl}
                      onChange={handleChange}
                      placeholder="https://example.com/image.jpg"
                      className={`flex-1 px-4 py-2.5 rounded-lg border ${errors.thumbnailUrl ? 'border-red-300 focus:ring-red-500' : 'border-gray-200 focus:ring-[#F85606] focus:border-[#F85606]'} bg-gray-50 focus:bg-white transition-all outline-none`}
                    />
                  </div>
                  <ErrorMessage message={errors.thumbnailUrl} />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Gallery Image URLs (Comma separated)</label>
                  <input
                    name="galleryUrls"
                    value={formData.galleryUrls}
                    onChange={handleChange}
                    placeholder="url1.jpg, url2.jpg"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-[#F85606] focus:border-[#F85606] bg-gray-50 focus:bg-white transition-all outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Video URL</label>
                  <input
                    name="videoUrl"
                    value={formData.videoUrl}
                    onChange={handleChange}
                    placeholder="https://youtube.com/..."
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-[#F85606] focus:border-[#F85606] bg-gray-50 focus:bg-white transition-all outline-none"
                  />
                </div>
              </div>
            </div>

            {/* 4. Variants */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 transition-shadow hover:shadow-md">
              <SectionHeader title="Product Variants" icon={Tags} description="Add colors and sizes separated by commas."/>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Colors</label>
                  <input
                    name="colors"
                    value={formData.colors}
                    onChange={handleChange}
                    placeholder="Red, Blue, Black"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-[#F85606] focus:border-[#F85606] bg-gray-50 focus:bg-white transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Sizes</label>
                  <input
                    name="sizes"
                    value={formData.sizes}
                    onChange={handleChange}
                    placeholder="S, M, L, XL"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-[#F85606] focus:border-[#F85606] bg-gray-50 focus:bg-white transition-all outline-none"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Right Sidebar Column */}
          <div className="lg:w-80 xl:w-96 space-y-8">
            
            {/* 6. Product Status */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-shadow hover:shadow-md">
              <SectionHeader title="Status & Visibility" icon={Settings} />
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Product Status</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-[#F85606] focus:border-[#F85606] bg-gray-50 focus:bg-white transition-all outline-none appearance-none"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                </div>

                <div className="pt-4 border-t border-gray-100 space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="featured"
                      checked={formData.featured}
                      onChange={handleChange}
                      className="w-5 h-5 rounded border-gray-300 text-[#F85606] focus:ring-[#F85606] transition-all cursor-pointer accent-[#F85606]"
                    />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Featured Product</span>
                  </label>
                  
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="flashSale"
                      checked={formData.flashSale}
                      onChange={handleChange}
                      className="w-5 h-5 rounded border-gray-300 text-[#F85606] focus:ring-[#F85606] transition-all cursor-pointer accent-[#F85606]"
                    />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Add to Flash Sale</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="freeShipping"
                      checked={formData.freeShipping}
                      onChange={handleChange}
                      className="w-5 h-5 rounded border-gray-300 text-[#F85606] focus:ring-[#F85606] transition-all cursor-pointer accent-[#F85606]"
                    />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Free Shipping</span>
                  </label>
                </div>
              </div>
            </div>

            {/* 5. Shipping Information */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-shadow hover:shadow-md">
              <SectionHeader title="Shipping" icon={Truck} />
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Weight (kg)</label>
                  <input
                    type="number"
                    step="0.1"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    placeholder="0.0"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-[#F85606] focus:border-[#F85606] bg-gray-50 focus:bg-white transition-all outline-none"
                  />
                </div>
                
                <label className="block text-sm font-semibold text-gray-700 mb-1.5 mt-2">Dimensions (cm)</label>
                <div className="grid grid-cols-3 gap-3">
                  <input
                    type="number"
                    name="length"
                    value={formData.length}
                    onChange={handleChange}
                    placeholder="L"
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-[#F85606] focus:border-[#F85606] bg-gray-50 focus:bg-white transition-all outline-none text-center"
                  />
                  <input
                    type="number"
                    name="width"
                    value={formData.width}
                    onChange={handleChange}
                    placeholder="W"
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-[#F85606] focus:border-[#F85606] bg-gray-50 focus:bg-white transition-all outline-none text-center"
                  />
                  <input
                    type="number"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                    placeholder="H"
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:ring-[#F85606] focus:border-[#F85606] bg-gray-50 focus:bg-white transition-all outline-none text-center"
                  />
                </div>
              </div>
            </div>

            {/* 7. SEO Information */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-shadow hover:shadow-md">
              <SectionHeader title="SEO Data" icon={FileText} />
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Meta Title</label>
                  <input
                    name="metaTitle"
                    value={formData.metaTitle}
                    onChange={handleChange}
                    placeholder="SEO friendly title"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-[#F85606] focus:border-[#F85606] bg-gray-50 focus:bg-white transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Meta Description</label>
                  <textarea
                    name="metaDescription"
                    value={formData.metaDescription}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Brief description for search engines"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-[#F85606] focus:border-[#F85606] bg-gray-50 focus:bg-white transition-all outline-none resize-y"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Tags (Comma separated)</label>
                  <input
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                    placeholder="phone, apple, 5g"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-[#F85606] focus:border-[#F85606] bg-gray-50 focus:bg-white transition-all outline-none"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Sticky Action Bar */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 px-4 sm:px-6 lg:px-8 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm font-medium text-gray-500 hidden sm:block">
                {Object.keys(errors).length > 0 ? (
                  <span className="text-red-500 flex items-center gap-1.5"><AlertCircle size={16}/> Please fix the errors above</span>
                ) : (
                  <span className="flex items-center gap-1.5"><CheckCircle size={16} className="text-green-500"/> All fields look good</span>
                )}
              </div>
              
              <div className="flex w-full sm:w-auto items-center gap-3">
                <button
                  type="button"
                  className="flex-1 sm:flex-none px-6 py-2.5 bg-white border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                >
                  <Save size={18} />
                  Draft
                </button>
                <button
                  type="button"
                  className="flex-1 sm:flex-none px-6 py-2.5 bg-indigo-50 text-indigo-700 font-semibold rounded-lg hover:bg-indigo-100 transition-colors flex items-center justify-center gap-2"
                >
                  <Eye size={18} />
                  Preview
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 sm:flex-none px-8 py-2.5 bg-[#F85606] hover:bg-[#e04e05] text-white font-semibold rounded-lg shadow-sm hover:shadow transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <CheckCircle size={18} />
                  {isSubmitting ? "Publishing..." : "Publish Product"}
                </button>
              </div>
            </div>
          </div>
          
        </form>
      </div>
    </div>
  );
}
