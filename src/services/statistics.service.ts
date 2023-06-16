import { instance } from 'api/api.interceptor';

class StatisticsService {
  main() {
    return instance.get('/statistics/main');
  }
}

export default new StatisticsService();
