'use client';

import './card.css';

interface CardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Card = ({
  title,
  description,
  imageUrl,
  children,
  onClick,
  ...props
}: CardProps) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl" onClick={onClick} {...props}>
      {imageUrl && (
        <figure>
          <img src={imageUrl} alt={title} className="w-full h-auto object-cover" />
        </figure>
      )}
      <div className="card-body">
        <h2 className="card-title text-xl font-semibold">{title}</h2>
        {description && <p className="text-gray-600 dark:text-gray-300">{description}</p>}
        {children && <div className="mt-4">{children}</div>}
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary">View</button>
        </div>
      </div>
    </div>
  );
};
