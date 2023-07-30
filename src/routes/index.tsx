import { component$ } from '@builder.io/qwik';
import type { RequestEvent } from '@builder.io/qwik-city';

export const onGet = async ({ redirect }: RequestEvent) => {
  throw redirect(301, '/tabs/home');
};

export default component$(() => {
  return (
    <>
      <h1>Hello world</h1>
    </>
  );
});
