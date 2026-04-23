export interface IExamDiploma {
  id: string;
  title: string;
}

export interface IExam {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: number;
  diplomaId: string;
  immutable: boolean;
  createdAt: string;
  updatedAt: string;
  diploma: IExamDiploma;
  questionsCount: number;
}

export interface IExamListMetadata {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface IExamListPayload {
  data: IExam[];
  metadata: IExamListMetadata;
}

export interface IDiplomaExamsResponse {
  status: boolean;
  code: number;
  payload: IExamListPayload;
}