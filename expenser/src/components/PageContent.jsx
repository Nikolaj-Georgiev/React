import classes from './PageContent.module.css';

export default function PageContent({
  img,
  imgText,
  title,
  cssClass,
  children,
}) {
  return (
    <>
      <div className={classes.content}>
        <h1>{title}</h1>
        <img
          src={img}
          alt={imgText}
          className={classes[cssClass]}
        />
        <p>{children}</p>
      </div>
    </>
  );
}
