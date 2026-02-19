import Carousel from "react-bootstrap/Carousel";

type ImageCarouselProps = {
    readonly images: string[];
};

export default function ImageCarousel({ images }: ImageCarouselProps) {
    if (images.length > 1) {
        return (
            <Carousel indicators={false}>
                {images.map((image, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100 object-fit-contain"
                            style={{ height: "400px" }}
                            src={image}
                            alt={`Slide ${index + 1}`}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        );
    } else {
        return (
            <img
                className="d-block w-100 object-fit-contain"
                style={{ height: "400px" }}
                src={images[0]}
                alt="Single Slide"
            />
        );
    }
}
