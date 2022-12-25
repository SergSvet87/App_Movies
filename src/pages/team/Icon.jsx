import Icons from "../../assets/icons/sprite-socials.svg";

const Icon = ({ name, size }) => (
  <svg
    className={`icon-${name}`}
    width={size}
    height={size}
  >
    <use xlinkHref={`${Icons}#${name}`} />
  </svg>
);

export default Icon;
