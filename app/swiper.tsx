import {register} from 'swiper/element/bundle';

register();


declare global {
    namespace JSX {
        interface IntrinsicElements {
            ['swiper-container']: any;
            ['swiper-slide']: any;
        }
    }
}

const Swiper = () => {
    const spaceBetween = 10
    const onProgress = (e: any) => {
        const [progress] = e.detail
        console.log(`swiper progress: ${progress}`)
    }
    const onSlideChange = () => {
        console.log('slide changed')
    }
    return (
        <swiper-container
            slides-per-view={1}
            space-between={spaceBetween}
            centered-slides={true}
            pagination={{
                hideOnClick: true,
            }}
            onSwiperprogress={onProgress}
            onSwiperslidechange={onSlideChange}
        >
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
        </swiper-container>
    )
};

export default Swiper;