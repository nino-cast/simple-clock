import { format } from 'date-fns';

export const renderClock = function (id: string): void {
  const element = document.getElementById(id);
  setInterval(() => {
    if (element) {
      element.innerHTML = format(new Date(), 'yyyy年MM月dd日 HH:mm:ss');
    }
  }, 1000);
};
