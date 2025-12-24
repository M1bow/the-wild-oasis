import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
import CabinTable from "./CabinTable";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// function AddCabin() {
//   const [isOpenMoadl, setIsOPenModal] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setIsOPenModal((show) => !show)}>
//         Add New Cabin
//       </Button>
//       {/* {isOpenMoadl && <CreateCabinForm />} */}
//       {isOpenMoadl && (
//         <Modal onClose={() => setIsOPenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOPenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
