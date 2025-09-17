interface BlogProp {
    params: { id: string };
}

export default function BlogPage({ params }: BlogProp) {
    return (
        <h1>Detail Blog dengan ID: {params.id}</h1>
    );
}