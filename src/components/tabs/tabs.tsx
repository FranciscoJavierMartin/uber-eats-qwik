import { component$ } from '@builder.io/qwik';
import { HiHomeOutline } from '@qwikest/icons/heroicons';
import './tabs.scss';

interface TabOption {
  id: string;
}

interface TabsProps {
  options: TabOption[];
}

export default component$((props: TabsProps) => {
  function handleButtonClick(option: TabOption, index: number) {}

  return (
    <div class='tabs'>
      {props.options.map((option, index) => (
        <div
          key={`tab-${option.id}`}
          class='tab'
          onClick$={handleButtonClick(option, index)}
        >
          <div class='item'>
            <div class='icon'>
              <HiHomeOutline />
            </div>
            <div class='title'>Home</div>
          </div>
        </div>
      ))}
      <div class='border-swiper' />
    </div>
  );
});
