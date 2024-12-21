export interface Props {
  /**
   * @title Post title.
   */
  title: string;
}

export default function JorgeComponent({ title }: Props) {
  return (
    <div>
      <h1 class="font-bold">{title}</h1>
        <p>This is an example section</p>
    </div>
  );
}
