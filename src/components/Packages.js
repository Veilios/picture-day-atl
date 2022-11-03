import React from "react";

const Packages = (props) => {
  console.log(props);
  console.log(props.taxRate);
  return (
    <div className="packages">
      {/* Package A  */}
      <div className="blue">
        <h3>
          Package A (1 Pose) $
          {props.taxRate.tax === 0 || props.taxRate.tax === null
            ? props.price.packageA
            : props.price.packageA +
            props.price.packageA * (props.taxRate.tax / 100)}
        </h3>
        <div className="details">
          <div>
            <p>1 (8x10), 3 (5x7), 4 wallets</p>
            <p>1 pose/ 1 Background</p>
            <p>* Add Digital for $20</p>
            <h3>
              Total with Digital $
              {props.taxRate.tax === 0 || props.taxRate.tax === null
                ? props.price.Ausb
                : props.price.Ausb +
                props.price.Ausb * (props.taxRate.tax / 100)}
            </h3>
          </div>
          <div>
            <img
              src="https://ae01.alicdn.com/kf/HTB1LB97LFXXXXcFXpXXq6xXFXXXp/5pcs-lot-Adult-children-dobok-taekwondo-uniforms-100-Cotton-tae-kwon-do-clothes-kids-taekwondo-ITF.jpg"
              alt="Pose"
            />
          </div>
        </div>
      </div>

      {/* Package B */}
      <div className="blue">
        <h3>
          Package B (1 Pose) $
          {props.taxRate.tax === 0 || props.taxRate.tax === null
            ? props.price.packageB
            : props.price.packageB +
            props.price.packageB * (props.taxRate.tax / 100)}
        </h3>
        <div className="details">
          <div>
            <p>2 (5x7), 4 wallets</p>
            <p>1 pose/ 1 Background</p>
            <p>* Add Digital for $20</p>
            <h3>
              Total with Digital $
              {props.taxRate.tax === 0 || props.taxRate.tax === null
                ? props.price.Bus
                : props.price.Busb +
                props.price.Busb * (props.taxRate.tax / 100)}
            </h3>
          </div>
          <div>
            <img
              src="https://ae01.alicdn.com/kf/HTB1LB97LFXXXXcFXpXXq6xXFXXXp/5pcs-lot-Adult-children-dobok-taekwondo-uniforms-100-Cotton-tae-kwon-do-clothes-kids-taekwondo-ITF.jpg"
              alt="Pose"
            />
          </div>
        </div>
      </div>

      {/* Package C */}
      <div className="blue">
        <h3>
          Package C (2 Poses) $
          {props.taxRate.tax === 0 || props.taxRate.tax === null
            ? props.price.packageC
            : props.price.packageC +
            props.price.packageC * (props.taxRate.tax / 100)}
        </h3>
        <div className="details">
          <div>
            <p>1 (8x10), 3 (5x7), 4 wallets</p>
            <p>2 pose/ 1 Background Each</p>
            <p>* Add Digital for $20</p>
            <h3>
              Total with Digital $
              {props.taxRate.tax === 0 || props.taxRate.tax === null
                ? props.price.Cusb
                : props.price.Cusb +
                props.price.Cusb * (props.taxRate.tax / 100)}
            </h3>
          </div>
          <div className="images">
            <img
              src="https://ae01.alicdn.com/kf/HTB1LB97LFXXXXcFXpXXq6xXFXXXp/5pcs-lot-Adult-children-dobok-taekwondo-uniforms-100-Cotton-tae-kwon-do-clothes-kids-taekwondo-ITF.jpg"
              alt="Pose"
            />
            <img
              src="https://ae01.alicdn.com/kf/HTB1LB97LFXXXXcFXpXXq6xXFXXXp/5pcs-lot-Adult-children-dobok-taekwondo-uniforms-100-Cotton-tae-kwon-do-clothes-kids-taekwondo-ITF.jpg"
              alt="Pose"
            />
          </div>
        </div>
      </div>

      {/* Package D */}
      <div className="blue">
        <h3>
          Package D (3 Poses) $
          {props.taxRate.tax === 0 || props.taxRate.tax === null
            ? props.price.packageD
            : props.price.packageD +
            props.price.packageD * (props.taxRate.tax / 100)}
        </h3>
        <div className="details more">
          <div>
            <p>1 (8x10), 3 (5x7), 4 wallets</p>
            <p>3 pose/ 1 Background Each</p>
            <p>* Add Digital for $20</p>
            <h3>
              Total with Digital $
              {props.taxRate.tax === 0 || props.taxRate.tax === null
                ? props.price.Dusb
                : props.price.Dusb +
                props.price.Dusb * (props.taxRate.tax / 100)}
            </h3>
          </div>
          <div className="images">
            <img
              src="https://ae01.alicdn.com/kf/HTB1LB97LFXXXXcFXpXXq6xXFXXXp/5pcs-lot-Adult-children-dobok-taekwondo-uniforms-100-Cotton-tae-kwon-do-clothes-kids-taekwondo-ITF.jpg"
              alt="Pose"
            />
            <img
              src="https://ae01.alicdn.com/kf/HTB1LB97LFXXXXcFXpXXq6xXFXXXp/5pcs-lot-Adult-children-dobok-taekwondo-uniforms-100-Cotton-tae-kwon-do-clothes-kids-taekwondo-ITF.jpg"
              alt="Pose"
            />
            <img
              src="https://ae01.alicdn.com/kf/HTB1LB97LFXXXXcFXpXXq6xXFXXXp/5pcs-lot-Adult-children-dobok-taekwondo-uniforms-100-Cotton-tae-kwon-do-clothes-kids-taekwondo-ITF.jpg"
              alt="Pose"
            />
          </div>
        </div>
      </div>

      {/* Package E */}
      <div className="blue">
        <h3>
          Package E (4 Poses) $
          {props.taxRate.tax === 0 || props.taxRate.tax === null
            ? props.price.packageE
            : props.price.packageE +
            props.price.packageE * (props.taxRate.tax / 100)}
        </h3>
        <div className="details more">
          <div>
            <p>1 (8x10), 3 (5x7), 4 wallets</p>
            <p> 4 pose/ 1 Background Each</p>
            <p>* Add Digital for $30</p>
            <h3>
              Total with Digital $
              {props.taxRate.tax === 0 || props.taxRate.tax === null
                ? props.price.Eusb
                : props.price.Eusb +
                props.price.Eusb * (props.taxRate.tax / 100)}
            </h3>
          </div>
          <div className="images">
            <img
              src="https://ae01.alicdn.com/kf/HTB1LB97LFXXXXcFXpXXq6xXFXXXp/5pcs-lot-Adult-children-dobok-taekwondo-uniforms-100-Cotton-tae-kwon-do-clothes-kids-taekwondo-ITF.jpg"
              alt="Pose"
            />
            <img
              src="https://ae01.alicdn.com/kf/HTB1LB97LFXXXXcFXpXXq6xXFXXXp/5pcs-lot-Adult-children-dobok-taekwondo-uniforms-100-Cotton-tae-kwon-do-clothes-kids-taekwondo-ITF.jpg"
              alt="Pose"
            />
            <img
              src="https://ae01.alicdn.com/kf/HTB1LB97LFXXXXcFXpXXq6xXFXXXp/5pcs-lot-Adult-children-dobok-taekwondo-uniforms-100-Cotton-tae-kwon-do-clothes-kids-taekwondo-ITF.jpg"
              alt="Pose"
            />
            <img
              src="https://ae01.alicdn.com/kf/HTB1LB97LFXXXXcFXpXXq6xXFXXXp/5pcs-lot-Adult-children-dobok-taekwondo-uniforms-100-Cotton-tae-kwon-do-clothes-kids-taekwondo-ITF.jpg"
              alt="Pose"
            />
          </div>
        </div>
      </div>
      {/* Package F */}
      <div className="blue">
        <h3>
          Package F (5 Poses) $
          {props.taxRate.tax === 0 || props.taxRate.tax === null
            ? props.price.packageF
            : props.price.packageF +
            props.price.packageF * (props.taxRate.tax / 100)}
        </h3>
        <div className="details more">
          <div>
            <p>1 (8x10), 3 (5x7), 4 wallets</p>
            <p> 4 pose/ 1 Background Each</p>
            <p>* Add Digital for $30</p>
            <h3>
              Total with Digital $
              {props.taxRate.tax === 0 || props.taxRate.tax === null
                ? props.price.Fusb
                : props.price.Fusb +
                props.price.Fusb * (props.taxRate.tax / 100)}
            </h3>
          </div>
          <div className="images">
            <img
              src="https://ae01.alicdn.com/kf/HTB1LB97LFXXXXcFXpXXq6xXFXXXp/5pcs-lot-Adult-children-dobok-taekwondo-uniforms-100-Cotton-tae-kwon-do-clothes-kids-taekwondo-ITF.jpg"
              alt="Pose"
            />
            <img
              src="https://ae01.alicdn.com/kf/HTB1LB97LFXXXXcFXpXXq6xXFXXXp/5pcs-lot-Adult-children-dobok-taekwondo-uniforms-100-Cotton-tae-kwon-do-clothes-kids-taekwondo-ITF.jpg"
              alt="Pose"
            />
            <img
              src="https://ae01.alicdn.com/kf/HTB1LB97LFXXXXcFXpXXq6xXFXXXp/5pcs-lot-Adult-children-dobok-taekwondo-uniforms-100-Cotton-tae-kwon-do-clothes-kids-taekwondo-ITF.jpg"
              alt="Pose"
            />
            <img
              src="https://ae01.alicdn.com/kf/HTB1LB97LFXXXXcFXpXXq6xXFXXXp/5pcs-lot-Adult-children-dobok-taekwondo-uniforms-100-Cotton-tae-kwon-do-clothes-kids-taekwondo-ITF.jpg"
              alt="Pose"
            />
          </div>
        </div>
      </div>

      {/* Multi A */}
      <div className="red">
        <h3>
          Multi A (3 Poses) $
          {props.taxRate.tax === 0 || props.taxRate.tax === null
            ? props.price.multiA
            : props.price.multiA +
            props.price.multiA * (props.taxRate.tax / 100)}
        </h3>
        <div className="details">
          <div>
            <p>Collage of 3 Images</p>
            <p>1 (8x10), 3 (5x7), 4 wallets</p>
            <p>* Free Digital Images</p>
          </div>
          <div className="images">
            <img
              src="https://ae01.alicdn.com/kf/HTB1LB97LFXXXXcFXpXXq6xXFXXXp/5pcs-lot-Adult-children-dobok-taekwondo-uniforms-100-Cotton-tae-kwon-do-clothes-kids-taekwondo-ITF.jpg"
              alt="Pose"
            />
          </div>
        </div>
      </div>

      {/* Multi B */}
      <div className="red">
        <h3>
          Multi B (4 Poses) $
          {props.taxRate.tax === 0 || props.taxRate.tax === null
            ? props.price.multiB
            : props.price.multiB +
            props.price.multiB * (props.taxRate.tax / 100)}
        </h3>
        <div className="details">
          <div>
            <p>Collage of 4 Images</p>
            <p>1 (10x13), 1 (8x10), 2(5x7)</p>
            <p>* Free Digital Images</p>
          </div>
          <div className="images">
            <img
              src="https://ae01.alicdn.com/kf/HTB1LB97LFXXXXcFXpXXq6xXFXXXp/5pcs-lot-Adult-children-dobok-taekwondo-uniforms-100-Cotton-tae-kwon-do-clothes-kids-taekwondo-ITF.jpg"
              alt="Pose"
            />
          </div>
        </div>
      </div>

      {/* Multi C */}
      <div className="red">
        <h3>
          Multi C (5 Poses) $
          {props.taxRate.tax === 0 || props.taxRate.tax === null
            ? props.price.multiC
            : props.price.multiC +
            props.price.multiC * (props.taxRate.tax / 100)}
        </h3>
        <div className="details">
          <div>
            <p>Collage of 5 Images</p>
            <p>2 (10x13), 1 (8x10), 2(5x7)</p>
            <p>* Free Digital Images</p>
          </div>
          <div className="images">
            <img
              src="https://ae01.alicdn.com/kf/HTB1LB97LFXXXXcFXpXXq6xXFXXXp/5pcs-lot-Adult-children-dobok-taekwondo-uniforms-100-Cotton-tae-kwon-do-clothes-kids-taekwondo-ITF.jpg"
              alt="Pose"
            />
          </div>
        </div>
      </div>

      {/** 1 Digital Image Only */}
      <div className="orange">
        <h3>
          USB 1 (1 Pose) $
          {props.taxRate.tax === 0 || props.taxRate.tax === null
            ? props.price.usb1
            : props.price.usb1 +
            props.price.usb1 * (props.taxRate.tax / 100)}
        </h3>
        <div className="details">
          <div>
            <p>1 image digital only</p>
            <p>1 Background</p>
            <p>Image copyrights included</p>
          </div>
          <div className="images">
            <img
              src="https://ae01.alicdn.com/kf/HTB1LB97LFXXXXcFXpXXq6xXFXXXp/5pcs-lot-Adult-children-dobok-taekwondo-uniforms-100-Cotton-tae-kwon-do-clothes-kids-taekwondo-ITF.jpg"
              alt="Pose"
            />
          </div>
        </div>
      </div>

      {/** 5 Digital Image Only */}
      <div className="orange">
        <h3>
          USB 5 (5 Pose) $
          {props.taxRate.tax === 0 || props.taxRate.tax === null
            ? props.price.usb2
            : props.price.usb2 +
            props.price.usb2 * (props.taxRate.tax / 100)}
        </h3>
        <div className="details">
          <div>
            <p>5 image digital only</p>
            <p>5 Backgrounds</p>
            <p>Image copyrights included</p>
          </div>
          <div className="images">
            <img
              src="https://ae01.alicdn.com/kf/HTB1LB97LFXXXXcFXpXXq6xXFXXXp/5pcs-lot-Adult-children-dobok-taekwondo-uniforms-100-Cotton-tae-kwon-do-clothes-kids-taekwondo-ITF.jpg"
              alt="Pose"
            />
            <img
              src="https://ae01.alicdn.com/kf/HTB1LB97LFXXXXcFXpXXq6xXFXXXp/5pcs-lot-Adult-children-dobok-taekwondo-uniforms-100-Cotton-tae-kwon-do-clothes-kids-taekwondo-ITF.jpg"
              alt="Pose"
            />
            <img
              src="https://ae01.alicdn.com/kf/HTB1LB97LFXXXXcFXpXXq6xXFXXXp/5pcs-lot-Adult-children-dobok-taekwondo-uniforms-100-Cotton-tae-kwon-do-clothes-kids-taekwondo-ITF.jpg"
              alt="Pose"
            />
            <img
              src="https://ae01.alicdn.com/kf/HTB1LB97LFXXXXcFXpXXq6xXFXXXp/5pcs-lot-Adult-children-dobok-taekwondo-uniforms-100-Cotton-tae-kwon-do-clothes-kids-taekwondo-ITF.jpg"
              alt="Pose"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;