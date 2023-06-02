import { ErrorCard } from './error-card.component';
import { renderWithRouter } from '../../tests/render-with-router';
import { screen } from '@testing-library/react';

describe(`ErrorCard`, (): void => {
  it(`should renders correctly`, (): void => {
    const result = renderWithRouter(
      <ErrorCard title="Title" children="Children"></ErrorCard>
    );

    expect(result).toMatchSnapshot();
  });

  it(`should have a title`, (): void => {
    const result = renderWithRouter(
      <ErrorCard title="Title" children="Children"></ErrorCard>
    );

    expect(
      screen.getByRole(`heading`, {
        level: 2,
      })
    ).toHaveTextContent(`Title`);
    expect(result).toMatchSnapshot();
  });

  it(`should have an image`, (): void => {
    const result = renderWithRouter(
      <ErrorCard title="Title" children="Children"></ErrorCard>
    );

    expect(screen.getByRole(`img`)).toHaveAttribute(
      `src`,
      `https://media.istockphoto.com/id/1345443906/fr/photo/symbole-de-panneau-davertissement-jaune-ou-alerte-de-danger-de-s%C3%A9curit%C3%A9-avertissement-ic%C3%B4ne.jpg?s=612x612&w=0&k=20&c=odJNq2qu0GXQ_8DNeHQuioOrnyXBnrJ6cNngCFwP9H4=`
    );
    expect(screen.getByRole(`img`)).toHaveAttribute(`alt`, `Error`);
    expect(result).toMatchSnapshot();
  });

  it(`should have a projection`, (): void => {
    const result = renderWithRouter(
      <ErrorCard
        title="Title"
        children={<p role="paragraph">Projection</p>}
      ></ErrorCard>
    );

    expect(screen.getByRole(`paragraph`)).toHaveTextContent(`Projection`);
    expect(result).toMatchSnapshot();
  });
});
