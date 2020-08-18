const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          items = menu.querySelectorAll('li'),
          btnAll = menu.querySelector('.all'),
          btnLovers = menu.querySelector('.lovers'),
          btnChef = menu.querySelector('.chef'),
          btnGirl = menu.querySelector('.girl'),
          btnGuy = menu.querySelector('.guy'),
          btnGrandmother = menu.querySelector('.grandmother'),
          btnGranddad = menu.querySelector('.granddad'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          markAll = wrapper.querySelectorAll('.all'),
          markGirl = wrapper.querySelectorAll('.girl'),
          markLovers = wrapper.querySelectorAll('.lovers'),
          markChef = wrapper.querySelectorAll('.chef'),
          markGuy = wrapper.querySelectorAll('.guy'),
          no = document.querySelector('.portfolio-no');

    const typeFilter = (markType) => {
        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeInUp');
        });

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeInUp');

        if (markType) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeInUp');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeInUp');
        }
    };

    btnAll.addEventListener('click', () => {
        typeFilter(markAll);
    });

    btnChef.addEventListener('click', () => {
        typeFilter(markChef);
    });

    btnGirl.addEventListener('click', () => {
        typeFilter(markGirl);
    });

    btnGuy.addEventListener('click', () => {
        typeFilter(markGuy);
    });

    btnLovers.addEventListener('click', () => {
        typeFilter(markLovers);
    });

    btnGranddad.addEventListener('click', () => {
        typeFilter();
    });

    btnGrandmother.addEventListener('click', () => {
        typeFilter();
    });

    menu.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.tagName == 'LI') {
            items.forEach(item => {
                item.classList.remove('active');
                target.classList.add('active');
            });
        } 
    });
};

export default filter;