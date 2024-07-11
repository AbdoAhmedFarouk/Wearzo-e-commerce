import useUserCart from '../../hooks/useUserCart';
import Container from '../../components/Container/Container';
import PageTitle from '../../components/PageTitle/PageTitle';
import SectionTag from '../../components/SectionTag/SectionTag';
import RatingStars from '../../components/RatingStars/RatingStars';

function ComparePage() {
  const { checkLoggedUser } = useUserCart();

  const products = checkLoggedUser?.comparedProducts || [];

  const renderTableData = (field, renderContent, styles = '') => (
    <tr>
      <td className="capitalize">{field}</td>

      {products.map((product) => (
        <td className={styles} key={product.id}>
          {renderContent(product)}
        </td>
      ))}
    </tr>
  );

  return (
    <SectionTag>
      <PageTitle text="Product Comparison" />

      <Container styles="text-primaryColor">
        <div className="scrollbar overflow-auto">
          <table className="w-full max-w-full text-sm md:text-base">
            <thead>
              <tr>
                <th colSpan={products.length + 1} className="capitalize">
                  Product Details
                </th>
              </tr>
            </thead>

            <tbody>
              {renderTableData(
                'Product',
                (product) => product.title,
                'md:whitespace-normal whitespace-nowrap',
              )}

              {renderTableData('Image', (product) => (
                <img
                  className="m-auto w-[80px]"
                  src={product.img}
                  alt={product.title}
                />
              ))}

              {renderTableData('Price', (product) => `€${product.price}`)}

              {renderTableData('Discount', (product) =>
                product.discount !== 0
                  ? `€${product.discount}`
                  : 'There is no discount.',
              )}

              {renderTableData('Category', (product) => product.category)}

              {renderTableData('Rating', (product) => (
                <RatingStars
                  styles="flex items-center text-eighthColor sm:text-base text-sm"
                  ratingLength={product.rating?.rate}
                />
              ))}

              {renderTableData('Description', (product) => product.description)}
            </tbody>
          </table>
        </div>
      </Container>
    </SectionTag>
  );
}

export default ComparePage;
