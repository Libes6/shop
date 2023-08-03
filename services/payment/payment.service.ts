import { IReview } from '@/types/review.interface';

import { instance } from '@/api/api.interceptor';

const PAYMENTS = '/statistics';
interface IReviewLeave {
  rating: number;
  text: string;
}
export const StatisticsService = {
  async getStatistics(amount:number) {
    return instance.post<IPaymentResponse>(PAYMENTS,{amount});
  },
};
