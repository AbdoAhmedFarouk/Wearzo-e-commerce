import subProductImg from '../../assets/subProductImg.jpg';

function ProductHoveringSubImg() {
  return (
    <div
      className="absolute -left-full top-0 z-40 h-full w-full
      duration-700 group-hover/box:left-0"
    >
      <img className="w-full" src={subProductImg} alt={subProductImg} />
    </div>
  );
}

export default ProductHoveringSubImg;
