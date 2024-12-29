import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";


const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img
          src={offer}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-coral-red'>Özel </span>
          Teklifler
        </h2>
        <p className='mt-4 info-text'>
        Rakipsiz fırsatlarla deneyiminizi yeniden tanımlayacak bir alışveriş yolculuğuna çıkın. Seçkin ürünlerden inanılmaz tasarruflara kadar, bizi farklı kılan eşsiz bir değer sunuyoruz.
        </p>
        <p className='mt-6 info-text'>
        En yüksek beklentileri aşarak benzersiz isteklerinizi yerine getirmek için tasarlanmış bir olasılıklar dünyasında gezin. Bizimle olan yolculuğunuz olağanüstü olmanın ötesindedir.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Şimdi Al' iconURL={arrowRight} />
          <Button
            label='Daha Fazla'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;