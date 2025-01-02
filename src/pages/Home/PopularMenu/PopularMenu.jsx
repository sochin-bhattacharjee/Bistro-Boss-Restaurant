import SectionTittle from '../../../Components/SectionTittle/SectionTittle';
import MenuItem from '../../shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    return (
        <section className='my-16'>
            <SectionTittle
            heading="From Our Menu"
            subHeading="---Popular Items---"
            >   
            </SectionTittle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    popular.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;