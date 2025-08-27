import { Helmet } from "react-helmet-async";
export default function SEO({ title = "Namuna Co-operative", description = "Member-owned. Community-driven.", noIndex = false }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
}
