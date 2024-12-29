import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
        Size
          <span className='text-coral-red'> Süper </span>
          <span className='text-coral-red'>Kaliteli </span> Ayakkabılar Sunuyoruz
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
        Premium konfor ve şıklığı garanti eden, özenle tasarlanmış ayakkabılarımız, deneyiminizi yükseltmek için tasarlandı. Size eşsiz kalite, yenilik ve zarafet sunar.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
        Detaylara ve mükemmeliyete olan bağlılığımız, memnuniyetinizi garanti eder.
        </p>
        <div className='mt-11'>
          <Button label='Detaylar' />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;