import React, { useEffect, useState } from 'react';

import Empty from '../../components/account/Empty';
import Items from '../../components/account/Items';
import FormModal from '../../components/FormModal';
import { handlerGetJogs } from '../../Store/Action';

function index() {
  const [ModalIsTrue, SetModalIsTrue] = useState(false);
  const [Jogs, SetJogs] = useState([]);
  useEffect(() => {
    handlerGetJogs().then((data) => {
      SetJogs(data.response.jogs);
    });
  }, []);
  console.log(Jogs);
  return (
    <div className="h-100 w-full flex flex-col items-center justify-center">
      {ModalIsTrue ? (
        <FormModal setModalIsTrue={SetModalIsTrue} />
      ) : Jogs.length > 0 ? (
        <>
          <Items items={Jogs} />
          <div
            className="fixed bottom-6 right-6"
            onClick={() => SetModalIsTrue(true)}
          >
            <img src="/images/add.png" alt="" />
          </div>
        </>
      ) : (
        <Empty setModalIsTrue={SetModalIsTrue} />
      )}
    </div>
  );
}

export default index;
