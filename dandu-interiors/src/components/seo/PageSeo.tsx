import { Helmet } from "react-helmet-async";

type PageSeoProps = {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
};

const siteName = "DANDU INTERIORS AND DEVELOPERS";
const baseUrl = "https://danduinteriors.com";

function PageSeo({ title, description, keywords = [], path = "/" }: PageSeoProps) {
  const fullTitle = `${title} | ${siteName}`;
  const canonical = `${baseUrl}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={siteName} />
    </Helmet>
  );
}

export default PageSeo;
