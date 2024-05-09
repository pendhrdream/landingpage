import { Carousel, IconButton } from "@material-tailwind/react";

export function ArticleCarousel() {
  const articles = [
    {
      title: "1",
      date: "2024/03/04",
      content: "Test1",
      image: "/img/CarouselImage.png",
    },
    {
      title: "2",
      date: "2024/03/04",
      content: "Test2",
      image: "/img/CarouselImage.png",
    },
    {
      title: "3",
      date: "2024/03/04",
      content: "Test3",
      image: "/img/CarouselImage.png",
    },
  ];
  return (
    <Carousel
      className="relative rounded-xl container mx-auto max-w-[1540px] font-rubik pb-[70px] responsive-padding"
      prevArrow={({ handlePrev, activeIndex }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          disabled={activeIndex === 0}
          className="!absolute bottom-0 left-1/2 translate-x-[-80px] rounded-[100%]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.82202 17.9976C9.72567 17.9015 9.64923 17.7874 9.59707 17.6617C9.54491 17.536 9.51807 17.4012 9.51807 17.2651C9.51807 17.1291 9.54491 16.9943 9.59707 16.8686C9.64923 16.7429 9.72567 16.6287 9.82202 16.5326L22.2373 4.11738C22.4316 3.92311 22.695 3.81397 22.9698 3.81397C23.2445 3.81397 23.508 3.92311 23.7023 4.11738C23.8966 4.31165 24.0057 4.57514 24.0057 4.84988C24.0057 5.12462 23.8966 5.38811 23.7023 5.58238L12.0175 17.2651L23.7023 28.9479C23.8965 29.1422 24.0057 29.4057 24.0057 29.6804C24.0057 29.9551 23.8965 30.2186 23.7023 30.4129C23.508 30.6072 23.2445 30.7163 22.9698 30.7163C22.695 30.7163 22.4315 30.6072 22.2373 30.4129L9.82202 17.9976Z"
              fill="white"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext, activeIndex }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          disabled={activeIndex === articles.length - 1}
          className="!absolute bottom-0 left-1/2 translate-x-[35px] rounded-[100%]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M23.6193 16.5326C23.7156 16.6287 23.7921 16.7429 23.8442 16.8686C23.8964 16.9943 23.9232 17.129 23.9232 17.2651C23.9232 17.4012 23.8964 17.536 23.8442 17.6617C23.7921 17.7874 23.7156 17.9015 23.6193 17.9976L11.204 30.4129C11.0097 30.6072 10.7462 30.7163 10.4715 30.7163C10.1968 30.7163 9.93328 30.6072 9.739 30.4129C9.54473 30.2186 9.43559 29.9551 9.43559 29.6804C9.43559 29.4057 9.54473 29.1422 9.739 28.9479L21.4238 17.2651L9.73901 5.58238C9.54473 5.38811 9.4356 5.12462 9.4356 4.84988C9.4356 4.57514 9.54473 4.31165 9.73901 4.11738C9.93328 3.9231 10.1968 3.81396 10.4715 3.81396C10.7462 3.81396 11.0097 3.9231 11.204 4.11738L23.6193 16.5326Z"
              fill="white"
            />
          </svg>
        </IconButton>
      )}
    >
      {articles.map((article) => (
        <div className="w-full flex flex-col sm:flex-col xl:flex-row gap-[190px] px-[20px] py-[20px] bg-[#FFFFFF10]">
          <div className="flex flex-col gap-[33px] pt-[30px] pl-[20px] text-white">
            <div className="flex flex-row justify-between">
              <span className="text-[20px] font-normal leading-[135%] tracking-[0.233px]">
                author of the article
              </span>
              <span className="text-[20px] font-normal leading-[135%] tracking-[0.233px]">
                {article.date}
              </span>
            </div>
            <span className="flex text-[52px] font-chakra font-medium leading-[135%] tracking-[0.233px]">
              {article.title}
            </span>
            <span className="text-[31px] font-normal leading-[135%] tracking-[0.233px]">
              An introduction to the article. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </span>
            <button className="flex px-[16px] py-[12px] rounded-[5px] border-[1px] border-solid border-white text-[24px] font-medium leading-[135%] tracking-[0.233px]">
              Read full article
            </button>
          </div>
          <img src={article.image} alt="" className="flex object-cover" />
        </div>
      ))}
    </Carousel>
  );
}

export default ArticleCarousel;
