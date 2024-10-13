export interface Job {
  id: number;
  companyLogo: string;
  title: string;
  companyName: string;
  city: string;
  location: string;
  salary: string;
  posted: string;
  field?: string;
  description: string;
  employmentType?: string;
}

export type HandlersFunction = (
  location: string,
  type: string,
  field: string,
  searchValue: string
) => void;

export interface FiltersProps {
  handlers: HandlersFunction;
}

export interface Option {
  label: string;
}

export interface ListProps {
  jobs: Job[];
  onJobClick: (job: Job) => void;
}

export interface Props {
  job: Job;
}
