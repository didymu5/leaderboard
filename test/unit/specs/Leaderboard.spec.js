import Vue from 'vue';
import Leaderboard from '@/components/Leaderboard';

describe('Leaderboard', () => {
  it('should list competitors in table', () => {
    const Constructor = Vue.extend(Leaderboard);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js PWA');
  });
});

