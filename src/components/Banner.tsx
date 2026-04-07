type BannerProps = {
  title: string;
};

function Banner({ title }: BannerProps) {
  return <h1>{title}</h1>;
}

export default Banner;