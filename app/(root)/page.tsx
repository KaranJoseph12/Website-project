import { getLatestProducts } from '@/lib/actions/product.actions'
import ProductList from '@/components/shared/product/product-list'

export default async function Home() {
  const latestProducts = await getLatestProducts()
  return (
    <div className="space-y-8">
      <ProductList title="Latest Arrivals" data={latestProducts} />
    </div>
  )
}