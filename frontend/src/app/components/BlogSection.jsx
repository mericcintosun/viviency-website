"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function BlogSection() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#242424] p-6">
        <Card className="grid grid-cols-1">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 sm:w-full rounded-none sm:rounded-r-none"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h6" color="gray" className="mb-4 uppercase">
              startups
            </Typography>
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Lyft launching cross-platform service this week
            </Typography>
            <Typography color="gray" className="mb-8 font-normal">
              Like so many organizations these days, Autodesk is a company in
              transition. It was until recently a traditional boxed software
              company selling licenses. Yet its own business model disruption is
              only part of the story
            </Typography>
            <a href="#" className="inline-block">
              <Button variant="text" className="flex items-center gap-2">
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </a>
          </CardBody>
        </Card>

        {/* İkinci kartı ekleyelim */}
        <Card className="grid grid-cols-1">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 sm:w-full rounded-none sm:rounded-r-none"
          >
            <img
              src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h6" color="gray" className="mb-4 uppercase">
              innovation
            </Typography>
            <Typography variant="h4" color="blue-gray" className="mb-2">
              The rise of remote work and its impact on innovation
            </Typography>
            <Typography color="gray" className="mb-8 font-normal">
              With the shift to remote work, businesses are finding new ways to
              foster innovation while maintaining productivity. Many companies
              are discovering the benefits of hybrid work models.
            </Typography>
            <a href="#" className="inline-block">
              <Button variant="text" className="flex items-center gap-2">
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </a>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
