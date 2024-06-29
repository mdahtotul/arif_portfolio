export type TTestimonialItem = {
  id: string;
  title: string;
  user: {
    name: string;
    designation: string;
    company: string;
    image?: string;
  };
  comment: string;
};
