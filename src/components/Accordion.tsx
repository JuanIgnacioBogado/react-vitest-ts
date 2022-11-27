import { ReactNode, useState } from 'react';

type Props = {
  title: string;
  children: ReactNode;
};

export const Accordion = ({ title, children }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div>
        <h3>{title}</h3>
        <button onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Open'}
        </button>
      </div>
      {open && <div>{children}</div>}
    </div>
  );
};
