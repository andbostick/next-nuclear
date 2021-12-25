import Image from "next/image";

export default function Hero({ src, height, width }) {
  return (
    <div className="hero">
      <Image
        src={src + '?fit=fill'}
        layout="responsive"
        height={height}
        width={width}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAFA4PEg8NFBIQEhcVFBgeMiEeHBwePSwuJDJJQExLR0BGRVBac2JQVW1WRUZkiGVtd3uBgoFOYI2XjH2Wc36BfP/bAEMBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIAHoA2QMBIgACEQEDEQH/xAAZAAADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAZEAEBAQEBAQAAAAAAAAAAAAAAAQIREjH/xAAYAQEBAQEBAAAAAAAAAAAAAAABAAIDBP/EABcRAQEBAQAAAAAAAAAAAAAAAAARARL/2gAMAwEAAhEDEQA/APDMjj3vKqHExUCVFRMVATMoYQAAJUqdKslFRV1FBRplprplplplpltrpltksaR0mdbNeWa8rBrSNIzi42560ioiKhCgRoNTiOnK70RcVESqlFUaQ4mKgpioaYYphgEKoKmqTWaYmoq6iimI0y000z0zWoy0x220w2zutZjOkdJlBWak4U1y0jLNaStZrnuNIqIioaIoEFVF9OVHTld6o0lXKylXKzTGkqpWcq5RTFymiVXWaooJ6OimGmn1NoqhVFVUWimJ0y000y1Wd1qM9MNNt1jr6xa1mJqVUmmdIAILzWuawy1zRYNxrFRnKqVqsxYLo6qoXVSsfSpp3ajaVcrGVcrO6o2lVKylXKzTGkqus5T6Ko06Oo6OimK6VpdTazVBam0WptFMTqstVeqy1WN1rMRqs6rVRThKkdJpjSABZOLzWapRqayqlZyqlZS+n1HT6LoZdOVPR16q22zppK55WmdDVG8q5WMq5WE1lVKylV0Jp0dR0dZSulaXU2gnai0WotZ3SWqz1VWs9UZhTammVbWlUnSac9AAQAASXKqVmco3E06fUdHWYkH0B6QcqpUHKo1mts1pK586aSs7hraVXWUpyswVp0+s+johq+lanpWiKnai0Ws7pjcaw9VnaLS6cw0FR0izuggCwAAkAAkAAkfR0gkoAO8AABQXKkGBpNKmmUquiCtPQ9M+jrMVaeiukdTaOTVXSLorSY3G80+l0gyqAAgAAkAAkAAkAAkAAkoAPSyDASAAKEMoaRggACppBwEZMaSADkQAEgAEgAEgAEgAEgAEn//Z"
        styles={{ display: 'block'}}
      />

      
    </div>
  );
}
