import React from "react";

export default function Home() {
  return (
    <>
      <div className="rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl">
        <p className="block rounded-xl bg-white p-6 sm:p-8">
          <div className="mt-16 sm:pr-8">
            <h3 className="text-xl font-bold text-gray-900">
              જન સેવા કેન્દ્ર એડમિન ડેશબોર્ડ પર આપનું સ્વાગત છે
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              જન સેવા કેન્દ્ર એ સરકાર દ્વારા સંચાલિત સેવા કેન્દ્ર છે જે
              નાગરિકોને સુવિધાજનક અને સુલભ રીતે સેવાઓની વિશાળ શ્રેણી પૂરી પાડે
              છે. એક એડમિનિસ્ટ્રેટર તરીકે, તમે કેન્દ્રની સરળ કામગીરીને સુનિશ્ચિત
              કરવામાં અને નાગરિકોને ઉચ્ચ ગુણવત્તાની સેવાઓ પહોંચાડવામાં
              મહત્વપૂર્ણ ભૂમિકા ભજવો છો. આ ડેશબોર્ડ સાથે, તમારી પાસે મહત્વપૂર્ણ
              માહિતી અને સાધનોની ઍક્સેસ છે જે તમને કેન્દ્રની રોજિંદી કામગીરીનું
              સંચાલન અને નિરીક્ષણ કરવામાં મદદ કરશે.
            </p>
          </div>
        </p>
      </div>
      <div>
        <p class="relative block rounded-xl border border-gray-100 p-8 shadow-xl">
          <div class="mt-4 text-gray-500 sm:pr-8">
            <h3 class="mt-4 text-xl font-bold text-gray-900">
            પૂરી પાડવામાં આવેલ કુલ મુખ્ય સેવાઓ: [ 7 ]
            </h3>

            <p class="mt-2 hidden text-sm sm:block"></p>
          </div>
        </p>
      </div>
    </>
  );
}
