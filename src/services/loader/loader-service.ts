import { BehaviorSubject } from 'rxjs';

const loaderSubject = new BehaviorSubject<boolean>(false);

export const pageLoader = {
  sendMessage: (active: boolean) => loaderSubject.next(active),
  getMessage: () => loaderSubject.asObservable(),
};
