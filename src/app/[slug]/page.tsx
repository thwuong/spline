import { WEBSITE_HOST_URL } from "../contants";

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const { title, description } = {
        title: "test",
        description: "test",
    };
    // Replace API
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: `${WEBSITE_HOST_URL}/posts/${params.slug}`,
            type: "article",
        },
        twitter: {
            title,
            description,
        },
        alternates: {
            canonical: `${WEBSITE_HOST_URL}/posts/${params.slug}`,
        },
    };
}

export default function Page({ params }: { params: { slug: string } }) {
    return <div>My Post: {params.slug}</div>;
}
