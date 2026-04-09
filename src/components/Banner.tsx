type BannerProps = {
  title: string;
};

function Banner({ title }: BannerProps) {
  return <h1 className="banner-title">{title}</h1>;
}

export default Banner;