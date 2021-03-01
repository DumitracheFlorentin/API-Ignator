const InfoModal = ({ mod }) => {
  return (
    <>
      <img src={mod.urls.regular} alt={mod.alt_description} />
      <p className="mt-4">Created at {mod.created_at}</p>
      <p>Author: {mod.user.name}</p>
      <p>Likes: {mod.likes}</p>
      <p>Description: {mod.alt_description}</p>
    </>
  );
};

export default InfoModal;
