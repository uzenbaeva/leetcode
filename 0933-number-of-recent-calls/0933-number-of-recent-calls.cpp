class RecentCounter {
private:
  queue<int>q;
  const int timeRange = 3000;
public:
    RecentCounter() {}
    int ping(int t) {
      q.push(t);
      int sub = abs(q.front() - t);
      while (q.size() > 0 && sub > timeRange){
        q.pop();
        sub = abs(q.front() - t);
      }
      return q.size();
    }
};