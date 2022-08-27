
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';


interface Props{
    exerciseDetail:any,
}
const Detail = ({ exerciseDetail }:Props) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];
 
  return (
    <div className="pt-5 flex flex-col md:flex-row w-full justify-around items-center text-orange-100">
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <div className='flex flex-col justify-end md:pt-11 md:pb-11 p-11'>
        <h1 className='text-5xl font-semibold text-orange-400'>
          {name}
        </h1>
        <h3 className='mt-5'>
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you improve your{' '}
          <br /> mood and gain energy.
        </h3>
        <div className='flex flex-col md:flex-row justify-around mt-11'> 
        {extraDetail?.map((item) => (
          <div key={item.name} className="text-center ">
            <button className='rounded-full bg-orange-300 p-5 '>
              <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
            </button>
            <h1 className='text text-2xl mt-1' style={{ textTransform: 'capitalize' }} >
              {item.name}
            </h1>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;