import { products } from "../data/products"
import ProductCard from "./ProductCard"
export default function Products() {
  return (
    <section id="productos" className="container-max py-20">
      <h2 className="text-3xl font-extrabold text-brand-dark mb-8 text-center">Muestra de productos</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {products.map(p => <ProductCard key={p.slug} product={p} />)}
      </div>
    </section>
  )
}
