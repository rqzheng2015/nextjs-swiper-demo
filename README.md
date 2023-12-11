# nextjs-swiper-demo

This is a swiper demo run on next.js, intended to show how to use Swiper Element(Web components) in React.

## Prerequisites

Run `pnpm install` to install the dependencies.

## Running commands

Development mode: The webstie will be hot updated once source file is changed.

```shell
pnpm dev
```

Production mode: The webstie will be first built and be served on a server process.

```shell
pnpm build
pnpm start
```

## Difference between SSR and noSSR

### Run in SSR

Change `app/page.tsx` to use `Swiper` component directly

```tsx
export default function Home() {
    return <Swiper />
}
```

### Run in noSSR

Change `app/page.tsx` to lazy import `Swiper` component with no SSR.

```tsx
const SwiperCSRComponent = dynamic(() => import('./swiper'), { ssr: false })

export default function Home() {
    return <SwiperCSRComponent />
}
```

### Difference

- The swiper component run in noSSR mode came out with no error on console.
- The swiper component run in SSR mode came out with error on console.
```text
Warning: Extra attributes from the server: role,aria-label,class,style
    at swiper-slide
    at swiper-container
    at Swiper
    at Home
```


