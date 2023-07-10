import { VtmnCard } from '@vtmn/react';
import { ReactNode, useMemo } from 'react';

interface IProps {
  readonly title: string;
  readonly children: ReactNode;
}

export function ErrorCard({ title, children }: IProps): JSX.Element {
  return useMemo(
    (): JSX.Element => (
      <div className="vtmn-container vtmn-flex vtmn-h-screen vtmn-mx-auto">
        <div className="vtmn-mx-auto gt-tablet:vtmn-my-auto vtmn-p-5">
          <VtmnCard
            title={title}
            variant="top-image"
            fullImage={true}
            img={
              <img
                alt="Error"
                src="https://media.istockphoto.com/id/1345443906/fr/photo/symbole-de-panneau-davertissement-jaune-ou-alerte-de-danger-de-s%C3%A9curit%C3%A9-avertissement-ic%C3%B4ne.jpg?s=612x612&w=0&k=20&c=odJNq2qu0GXQ_8DNeHQuioOrnyXBnrJ6cNngCFwP9H4="
              />
            }
          >
            {children}
          </VtmnCard>
        </div>
      </div>
    ),
    [title, children]
  );
}
