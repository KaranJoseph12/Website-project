import ProductList from '@/components/shared/product/product-list'
import sampleData from '@/lib/sample-data'


export default function Home() {
  return (
    <div className="space-y-8">
    <ProductList  data={sampleData.products} />
    
  </div>
  )
}
