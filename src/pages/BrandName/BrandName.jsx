import { useParams } from 'react-router-dom';

function BrandName() {
  const id = useParams();

  console.log(id);

  return <div>id:{id.brandId}</div>;
}

export default BrandName;
