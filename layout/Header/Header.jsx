import { Container, NavBar } from '@/components';
import { HeaderTitle } from 'components/HeaderTitle/HeaderTitle';
import { Logo } from 'components/Logo/Logo';
import { ModalBtn } from 'components/ModalBtn/ModalBtn';

export const Header = () => {
  return (
    <header className="sticky top-0 z-30 flex h-[50px] w-full items-center bg-white xl:h-[64px]">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-[20px] md:gap-x-[40px]">
            <Logo
              isClickable={true}
              className="h-[24px] w-[40px] md:h-[30px] md:w-[50px] xl:h-[48px] xl:w-[80px]"
            />
            <HeaderTitle />
          </div>
          <div className="flex gap-x-[50px]">
            <NavBar />
            <ModalBtn text="start project" className="max-xl:hidden" />
          </div>
        </div>
      </Container>
    </header>
  );
};
