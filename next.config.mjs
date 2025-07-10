import nextra from "nextra";

const withNextra = nextra({
    search: true,
    defaultShowCopyCode: true,
});

export default withNextra({
    output: 'export',
     cleanDistDir: true,
    images: {
        unoptimized: true,
        domains: ['img.youtube.com', 'cea.gg'],
      },
});
